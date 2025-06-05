import {
  Box,
  ClickAwayListener,
  Grow,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import OutIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
const { ethereum } = window as any;

interface ISummaryProps {
  account: string | null;
  onSendEth: () => void;
  onAccountChange: (account: string) => void;
}

export const Summary = ({
  account,
  onAccountChange,
  onSendEth,
}: ISummaryProps) => {
  const [balance, setBalance] = useState<string | null>(null);
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (ethereum) {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            onAccountChange(accounts[0].toString());
            ethereum.on("accountsChanged", (accounts: string[]) => {
              if (accounts.length > 0) {
                onAccountChange(accounts[0]);
              }
            });
          }
        });
    }
  }, []);

  useEffect(() => {
    if (account) {
      const provider = new ethers.BrowserProvider(ethereum);
      provider.getBalance(account).then((balance: bigint) => {
        setBalance(ethers.formatEther(balance));
      });
    }
  }, [account]);

  if (!ethereum) {
    return (
      <Typography>Please install MetaMask to view your balance.</Typography>
    );
  }

  if (!account) {
    return <Typography>Connecting to your wallet...</Typography>;
  }

  const handleToggle = () => setOpen(!open);
  const handleClickAway = (event: MouseEvent | TouchEvent) => {
    if (!anchorRef?.current?.contains(event.target as HTMLElement)) {
      setOpen(false);
    }
  };

  const handleSendEth = () => {
    onSendEth();
    setOpen(false);
  };

  return (
    <>
      <Box
        p={2}
        textAlign="center"
        sx={{ backgroundColor: "#FAF8FD", borderRadius: 2, boxShadow: 3 }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h2" sx={{ flexGrow: 1 }}>
            Balance
          </Typography>
          <IconButton
            ref={anchorRef}
            size="large"
            sx={{ width: 36, height: 36 }}
            onClick={handleToggle}
          >
            <MenuIcon color="action" fontSize="small" />
          </IconButton>
        </Box>
        <Typography>
          Account: <strong>{account}</strong>
        </Typography>
        <Typography>
          Current balance: <strong>{balance}</strong>
        </Typography>
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClickAway}>
                <MenuList>
                  <MenuItem onClick={handleSendEth}>
                    <ListItemIcon>
                      <OutIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Send ETH</ListItemText>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
