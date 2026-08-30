# QuantSignal — stock-market AI predictor MVP

A dependency-free research dashboard for a professional predictor workflow: past-only technical inputs, probability-based signal, volatility-aware risk gate and a walk-forward cost-adjusted backtest.

## Run

Open `index.html` in any modern browser. No installation or server is required.

## What it is / is not

This is a functional **UI and research prototype**. Its series is deterministic simulated data, and its prediction is a transparent heuristic—not a trained ML model, live market feed, investment advice or an execution system.

## Production next steps

1. Replace `series()` in `app.js` with a licensed, audited, point-in-time OHLCV provider.
2. Store raw and adjusted data separately; validate missing candles, corporate actions and timestamps.
3. Train models only on preceding data; use an expanding walk-forward split, calibration, costs and slippage.
4. Add a separate server-side risk service, authentication, monitoring, model/version registry and paper-trading integration.
5. Have a qualified professional review market, operational, regulatory and tax obligations before release.