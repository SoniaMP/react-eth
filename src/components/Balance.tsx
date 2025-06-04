import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
const { ethereum } = window as any;

export const Balance = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    if (ethereum) {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0].toString());
            ethereum.on("accountsChanged", (accounts: string[]) => {
              if (accounts.length > 0) {
                setAccount(accounts[0]);
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

  return (
    <Box
      mt={2}
      p={2}
      textAlign="center"
      style={{ backgroundColor: "#FAF8FD", borderRadius: 8 }}
    >
      <Typography variant="h2">Balance</Typography>
      <Typography>
        Account: <strong>{account}</strong>
      </Typography>
      <Typography>
        Current balance: <strong>{balance}</strong>
      </Typography>
    </Box>
  );
};
