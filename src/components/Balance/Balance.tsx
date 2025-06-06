import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";

import type { IEthAddress } from "../../interfaces";
import { Summary } from "./Summary";

export const Balance = () => {
  const [account, setAccount] = useState<string | null>(null);
  const { register, handleSubmit } = useForm<IEthAddress>();
  const [showSendEth, setShowSendEth] = useState<boolean>(false);
  const [resultado, setResultado] = useState<string | null>(null);

  const handleAccountChange = (newAccount: string) => setAccount(newAccount);

  const handleOpenSendEth = () => setShowSendEth(true);

  const onSubmit = async (data: IEthAddress) => {
    const params = {
      from: account,
      to: data.address,
      value: ethers.parseEther(data.amount).toString(),
    };

    try {
      const { ethereum } = window as any;
      const txtHash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [params],
      });
      setResultado(txtHash);
    } catch (error) {
      console.error("Error sending ETH:", error);
    }
  };

  return (
    <Stack spacing={2}>
      <Summary
        account={account}
        onSendEth={handleOpenSendEth}
        onAccountChange={handleAccountChange}
      />
      {showSendEth && (
        <Stack spacing={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" spacing={1}>
              <TextField
                placeholder="Recipient Address"
                {...register("address", { required: true })}
              />
              <TextField
                placeholder="Amount (ETH)"
                {...register("amount", { required: true })}
              />
              <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" type="submit">
                  Send
                </Button>
              </Box>
            </Stack>
          </form>
          {resultado && (
            <Box
              mt={2}
              p={2}
              sx={{ backgroundColor: "#FAF8FD", borderRadius: 2 }}
            >
              <strong>Transaction Hash:</strong> {resultado}
            </Box>
          )}
        </Stack>
      )}
    </Stack>
  );
};
