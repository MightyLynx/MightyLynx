import { useEffect, useState } from "react";

interface CryptoPrice {
  symbol: string;
  price: string;
  change: number;
}

const CryptoTicker = () => {
  const [cryptos, setCryptos] = useState<CryptoPrice[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,ripple,cardano,avalanche-2,polkadot&vs_currencies=usd&include_24hr_change=true"
        );
        const data = await response.json();

        const formattedData: CryptoPrice[] = [
          { symbol: "BTC", price: data.bitcoin.usd.toLocaleString(), change: data.bitcoin.usd_24h_change.toFixed(2) },
          { symbol: "ETH", price: data.ethereum.usd.toLocaleString(), change: data.ethereum.usd_24h_change.toFixed(2) },
          { symbol: "BNB", price: data.binancecoin.usd.toLocaleString(), change: data.binancecoin.usd_24h_change.toFixed(2) },
          { symbol: "SOL", price: data.solana.usd.toLocaleString(), change: data.solana.usd_24h_change.toFixed(2) },
          { symbol: "XRP", price: data.ripple.usd.toLocaleString(), change: data.ripple.usd_24h_change.toFixed(2) },
          { symbol: "ADA", price: data.cardano.usd.toLocaleString(), change: data.cardano.usd_24h_change.toFixed(2) },
          { symbol: "AVAX", price: data["avalanche-2"].usd.toLocaleString(), change: data["avalanche-2"].usd_24h_change.toFixed(2) },
          { symbol: "DOT", price: data.polkadot.usd.toLocaleString(), change: data.polkadot.usd_24h_change.toFixed(2) },
        ];

        setCryptos(formattedData);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-card/50 backdrop-blur-sm border-b border-primary/20 overflow-hidden relative">
      <div className="flex animate-scroll">
        {[...cryptos, ...cryptos].map((crypto, index) => (
          <div
            key={`${crypto.symbol}-${index}`}
            className="flex items-center gap-2 px-6 py-3 whitespace-nowrap"
          >
            <span className="text-sm font-bold text-primary">{crypto.symbol}</span>
            <span className="text-sm text-foreground">${crypto.price}</span>
            <span
              className={`text-xs font-medium ${
                parseFloat(crypto.change.toString()) >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {parseFloat(crypto.change.toString()) >= 0 ? "+" : ""}
              {crypto.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
