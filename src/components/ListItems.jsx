import List from "@mui/material/List";
import Items from "./SearchResults";
import React from "react";

export default function AlignItemsList({ results, setSymbol }) {
  return (
    <div style={{ position: "fixed", width: "100%" }}>
      <List
        sx={{ maxWidth: 200, bgcolor: "background.paper", overflow: "visible" }}
      >
        {results.map((item) => (
          <Items
            ticker={item.symbol}
            name={item.name}
            exchange={item.exchange}
            country={item.country}
            setSymbol={setSymbol}
          />
        ))}
      </List>
    </div>
  );
}
