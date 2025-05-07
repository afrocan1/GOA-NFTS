
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function GoaradioDashboard() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [tokenData, setTokenData] = useState({ name: "", symbol: "", supply: "" });
  const [nftData, setNftData] = useState({ name: "", description: "", file: null });

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletConnected(true);
      } catch (err) {
        console.error("Wallet connect error:", err);
      }
    } else {
      alert("MetaMask not found. Please install it.");
    }
  };

  const handleTokenSubmit = (e) => {
    e.preventDefault();
    console.log("Token data:", tokenData);
    // Here you'll connect to your smart contract logic
  };

  const handleNFTSubmit = (e) => {
    e.preventDefault();
    console.log("NFT data:", nftData);
    // Handle NFT creation logic
  };

  return (
    <div className="min-h-screen bg-black text-gold p-4 space-y-8">
      <h1 className="text-4xl font-bold text-center">🎧 Goaradio Marketplace</h1>

      <div className="flex justify-center">
        <Button onClick={connectWallet} className="bg-gold text-black hover:bg-yellow-400">
          {walletConnected ? "Wallet Connected" : "Connect Wallet"}
        </Button>
      </div>

      {/* Token Creator */}
      <Card className="bg-zinc-900 border-gold">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Create a Token</h2>
          <form onSubmit={handleTokenSubmit} className="space-y-2">
            <Input
              placeholder="Token Name"
              value={tokenData.name}
              onChange={(e) => setTokenData({ ...tokenData, name: e.target.value })}
              className="bg-zinc-800 text-gold"
            />
            <Input
              placeholder="Token Symbol"
              value={tokenData.symbol}
              onChange={(e) => setTokenData({ ...tokenData, symbol: e.target.value })}
              className="bg-zinc-800 text-gold"
            />
            <Input
              placeholder="Initial Supply"
              type="number"
              value={tokenData.supply}
              onChange={(e) => setTokenData({ ...tokenData, supply: e.target.value })}
              className="bg-zinc-800 text-gold"
            />
            <Button type="submit" className="bg-gold text-black hover:bg-yellow-400">Create Token</Button>
          </form>
        </CardContent>
      </Card>

      {/* NFT Creator */}
      <Card className="bg-zinc-900 border-gold">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Create an NFT</h2>
          <form onSubmit={handleNFTSubmit} className="space-y-2">
            <Input
              placeholder="NFT Name"
              value={nftData.name}
              onChange={(e) => setNftData({ ...nftData, name: e.target.value })}
              className="bg-zinc-800 text-gold"
            />
            <Input
              placeholder="Description"
              value={nftData.description}
              onChange={(e) => setNftData({ ...nftData, description: e.target.value })}
              className="bg-zinc-800 text-gold"
            />
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setNftData({ ...nftData, file: e.target.files[0] })}
              className="bg-zinc-800 text-gold"
            />
            <Button type="submit" className="bg-gold text-black hover:bg-yellow-400">Mint NFT</Button>
          </form>
        </CardContent>
      </Card>

      {/* Deploy Contracts Section */}
      <Card className="bg-zinc-900 border-gold">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Deploy Smart Contract</h2>
          <Button className="bg-gold text-black hover:bg-yellow-400">Deploy Contract</Button>
        </CardContent>
      </Card>
    </div>
  );
}
