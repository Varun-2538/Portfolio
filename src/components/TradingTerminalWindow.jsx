"use client"

import { useState, useEffect, useRef } from "react"

const TradingTerminalWindow = () => {
  const [logs, setLogs] = useState([])
  const [candleData, setCandleData] = useState([])
  const [stockData, setStockData] = useState({
    BTC: { price: 65432.18, change: +2.34 },
    ETH: { price: 3456.78, change: +1.23 },
    SOL: { price: 143.21, change: -0.45 },
    AAPL: { price: 198.45, change: +0.78 },
    MSFT: { price: 412.67, change: +1.12 },
    NVDA: { price: 876.54, change: +3.21 },
  })
  const [activeAlgorithms, setActiveAlgorithms] = useState([
    { id: "algo-1", name: "MomentumTracker_v3", status: "RUNNING", profit: "+2.34%", runtime: "2h 34m" },
    { id: "algo-2", name: "VolatilityArbitrage", status: "RUNNING", profit: "+1.05%", runtime: "4h 12m" },
    { id: "algo-3", name: "ML_PredictiveModel", status: "ANALYZING", profit: "0.00%", runtime: "0h 45m" },
  ])
  const [signals, setSignals] = useState([])
  const [selectedTimeframe, setSelectedTimeframe] = useState("4H")
  const terminalRef = useRef(null)
  const chartCanvasRef = useRef(null)
  const [pixelRatio, setPixelRatio] = useState(1)
  const containerRef = useRef(null)

  // Get device pixel ratio for sharper rendering
  useEffect(() => {
    setPixelRatio(window.devicePixelRatio || 1)
  }, [])

  // Generate initial candle data
  useEffect(() => {
    // Generate 50 candles of historical data
    const initialCandles = generateInitialCandles(50)
    setCandleData(initialCandles)

    // Generate some initial trading signals
    const initialSignals = [
      { type: "buy", candle: 12, price: initialCandles[12].close, riskReward: 2.5 },
      { type: "sell", candle: 28, price: initialCandles[28].close, riskReward: 1.8 },
      { type: "buy", candle: 42, price: initialCandles[42].close, riskReward: 3.2 },
    ]
    setSignals(initialSignals)
  }, [])

  // Generate random trading logs
  useEffect(() => {
    const logMessages = [
      { type: "info", message: "System initialized. Trading algorithms active." },
      { type: "trade", message: "BUY order executed: BTC @ $65,432.18 | Qty: 0.15" },
      { type: "trade", message: "SELL order executed: ETH @ $3,456.78 | Qty: 2.5" },
      { type: "alert", message: "VOLATILITY ALERT: Unusual activity detected in SOL" },
      { type: "info", message: "Market analysis complete. Recalibrating parameters." },
      { type: "trade", message: "BUY order executed: NVDA @ $876.54 | Qty: 10" },
      { type: "alert", message: "OPPORTUNITY DETECTED: ETH/BTC spread at optimal entry" },
      { type: "info", message: "ML model prediction: 78% confidence in BTC uptrend" },
      { type: "trade", message: "SELL order executed: AAPL @ $198.45 | Qty: 25" },
      { type: "alert", message: "RISK MANAGEMENT: Position size adjusted for MSFT" },
      { type: "info", message: "Backtesting complete: Strategy yielding 12.4% annual return" },
      { type: "trade", message: "BUY order executed: SOL @ $143.21 | Qty: 50" },
    ]

    // Initial logs
    setLogs(logMessages.slice(0, 4))

    // Add new logs periodically
    const logInterval = setInterval(() => {
      const randomLog = logMessages[Math.floor(Math.random() * logMessages.length)]
      setLogs((prevLogs) => {
        const newLogs = [...prevLogs, randomLog]
        // Keep only the last 8 logs
        return newLogs.slice(Math.max(0, newLogs.length - 8))
      })

      // Auto-scroll to bottom
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    }, 3000)

    // Update stock prices periodically
    const priceInterval = setInterval(() => {
      setStockData((prevData) => {
        const newData = { ...prevData }
        Object.keys(newData).forEach((symbol) => {
          // Random price change between -0.5% and +0.5%
          const changePercent = (Math.random() - 0.3) * 1
          const newPrice = newData[symbol].price * (1 + changePercent / 100)
          newData[symbol] = {
            price: Number.parseFloat(newPrice.toFixed(2)),
            change: Number.parseFloat((newData[symbol].change + changePercent / 10).toFixed(2)),
          }
        })
        return newData
      })

      // Add a new candle and update chart
      setCandleData((prevCandles) => {
        const lastCandle = prevCandles[prevCandles.length - 1]
        const newCandle = generateNextCandle(lastCandle)

        // Occasionally generate trading signals
        if (Math.random() > 0.8) {
          const signalType = Math.random() > 0.5 ? "buy" : "sell"
          const riskReward = (Math.random() * 3 + 1).toFixed(1)

          setSignals((prev) => [
            ...prev,
            {
              type: signalType,
              candle: prevCandles.length,
              price: newCandle.close,
              riskReward: Number.parseFloat(riskReward),
            },
          ])

          // Add signal to logs
          setLogs((prevLogs) => {
            const newLog = {
              type: "alert",
              message: `STRATEGY SIGNAL: ${signalType.toUpperCase()} at $${newCandle.close.toLocaleString()} (R:R = ${riskReward})`,
            }
            const newLogs = [...prevLogs, newLog]
            return newLogs.slice(Math.max(0, newLogs.length - 8))
          })
        }

        // Keep only the last 50 candles
        return [...prevCandles.slice(-49), newCandle]
      })
    }, 2000)

    // Draw initial chart
    drawCandlestickChart()

    return () => {
      clearInterval(logInterval)
      clearInterval(priceInterval)
    }
  }, [])

  // Update chart when candle data changes
  useEffect(() => {
    drawCandlestickChart()
  }, [candleData, signals, pixelRatio])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (chartCanvasRef.current) {
        const canvas = chartCanvasRef.current
        const rect = canvas.getBoundingClientRect()

        // Set canvas dimensions accounting for pixel ratio for sharp rendering
        canvas.width = rect.width * pixelRatio
        canvas.height = rect.height * pixelRatio

        // Scale the context
        const ctx = canvas.getContext("2d")
        ctx.scale(pixelRatio, pixelRatio)

        // Reset the CSS size
        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`

        drawCandlestickChart()
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initial sizing

    return () => window.removeEventListener("resize", handleResize)
  }, [pixelRatio])

  // Generate initial candles
  const generateInitialCandles = (count) => {
    const candles = []
    let lastClose = 65000 // Starting price for BTC

    for (let i = 0; i < count; i++) {
      // Random price movement
      const changePercent = (Math.random() - 0.5) * 2
      const open = lastClose
      const close = Math.max(open * (1 + changePercent / 100), open * 0.9)

      // High is the max of open and close, plus some random amount
      const high = Math.max(open, close) * (1 + Math.random() * 0.005)

      // Low is the min of open and close, minus some random amount
      const low = Math.min(open, close) * (1 - Math.random() * 0.005)

      // Volume is random
      const volume = Math.random() * 1000 + 500

      candles.push({
        time: new Date(Date.now() - (count - i) * 15 * 60 * 1000), // 15-minute candles
        open,
        high,
        low,
        close,
        volume,
      })

      lastClose = close
    }

    return candles
  }

  // Generate the next candle based on the previous one
  const generateNextCandle = (lastCandle) => {
    const changePercent = (Math.random() - 0.5) * 2
    const open = lastCandle.close
    const close = Math.max(open * (1 + changePercent / 100), open * 0.9)

    // High is the max of open and close, plus some random amount
    const high = Math.max(open, close) * (1 + Math.random() * 0.005)

    // Low is the min of open and close, minus some random amount
    const low = Math.min(open, close) * (1 - Math.random() * 0.005)

    // Volume is random
    const volume = Math.random() * 1000 + 500

    return {
      time: new Date(),
      open,
      high,
      low,
      close,
      volume,
    }
  }

  // Draw candlestick chart
  const drawCandlestickChart = () => {
    const canvas = chartCanvasRef.current
    if (!canvas || candleData.length === 0) return

    const ctx = canvas.getContext("2d")
    const rect = canvas.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Clear with proper scaling
    ctx.clearRect(0, 0, width * pixelRatio, height * pixelRatio)

    const padding = { top: 20, right: 10, bottom: 30, left: 60 }
    const chartWidth = width - padding.left - padding.right

    const chartHeight = height - padding.top - padding.bottom

    // Find min and max prices for scaling
    let minPrice = Math.min(...candleData.map((candle) => candle.low))
    let maxPrice = Math.max(...candleData.map((candle) => candle.high))

    // Add some padding to the price range
    const pricePadding = (maxPrice - minPrice) * 0.1
    minPrice -= pricePadding
    maxPrice += pricePadding

    // Calculate candle width and spacing
    const totalCandles = candleData.length
    const candleWidth = (chartWidth / totalCandles) * 0.8
    const candleSpacing = (chartWidth / totalCandles) * 0.2

    // Draw background
    ctx.fillStyle = "#161B22"
    ctx.fillRect(0, 0, width, height)

    // Draw grid lines
    drawGrid(ctx, padding, chartWidth, chartHeight, minPrice, maxPrice)

    // Draw volume bars
    drawVolumeBars(ctx, candleData, padding, chartWidth, chartHeight, candleWidth, candleSpacing)

    // Draw price scale
    drawPriceScale(ctx, padding, chartHeight, minPrice, maxPrice)

    // Draw time scale
    drawTimeScale(ctx, candleData, padding, chartWidth, chartHeight, candleWidth, candleSpacing)

    // Draw moving averages
    const ma20 = calculateMA(candleData, 20)
    drawMA(
      ctx,
      ma20,
      padding,
      chartHeight,
      minPrice,
      maxPrice,
      chartWidth,
      candleWidth,
      candleSpacing,
      "#FFA500",
      "MA20",
    )

    const ma50 = calculateMA(candleData, 50)
    drawMA(
      ctx,
      ma50,
      padding,
      chartHeight,
      minPrice,
      maxPrice,
      chartWidth,
      candleWidth,
      candleSpacing,
      "#3F51B5",
      "MA50",
    )

    // Draw candlesticks
    drawCandles(ctx, candleData, padding, chartHeight, minPrice, maxPrice, chartWidth, candleWidth, candleSpacing)

    // Draw trading signals
    drawSignals(
      ctx,
      signals,
      candleData,
      padding,
      chartHeight,
      minPrice,
      maxPrice,
      chartWidth,
      candleWidth,
      candleSpacing,
    )

    // Draw current price line
    if (candleData.length > 0) {
      const lastPrice = candleData[candleData.length - 1].close
      const y = padding.top + chartHeight - ((lastPrice - minPrice) / (maxPrice - minPrice)) * chartHeight

      ctx.strokeStyle = "#FFFF00"
      ctx.setLineDash([2, 2])
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(width - padding.right, y)
      ctx.stroke()
      ctx.setLineDash([])

      // Price label
      ctx.fillStyle = "#FFFF00"
      ctx.font = "bold 10px monospace"
      ctx.textAlign = "right"
      ctx.fillText(lastPrice.toLocaleString(undefined, { maximumFractionDigits: 2 }), width - padding.right - 5, y - 5)
    }

    // Draw chart border
    ctx.strokeStyle = "#30363D"
    ctx.lineWidth = 1
    ctx.strokeRect(padding.left, padding.top, chartWidth, chartHeight)
  }

  // Draw grid
  const drawGrid = (ctx, padding, chartWidth, chartHeight, minPrice, maxPrice) => {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
    ctx.lineWidth = 1

    // Horizontal grid lines
    const priceStep = (maxPrice - minPrice) / 8
    for (let i = 0; i <= 8; i++) {
      const price = minPrice + priceStep * i
      const y = padding.top + chartHeight - ((price - minPrice) / (maxPrice - minPrice)) * chartHeight

      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(padding.left + chartWidth, y)
      ctx.stroke()
    }

    // Vertical grid lines
    const timeStep = Math.max(1, Math.floor(candleData.length / 10))
    for (let i = 0; i < candleData.length; i += timeStep) {
      const x = padding.left + i * (chartWidth / candleData.length) + chartWidth / candleData.length / 2

      ctx.beginPath()
      ctx.moveTo(x, padding.top)
      ctx.lineTo(x, padding.top + chartHeight)
      ctx.stroke()
    }
  }

  // Draw price scale
  const drawPriceScale = (ctx, padding, chartHeight, minPrice, maxPrice) => {
    ctx.fillStyle = "#8a8a8a"
    ctx.font = "10px monospace"
    ctx.textAlign = "right"

    const priceStep = (maxPrice - minPrice) / 8
    for (let i = 0; i <= 8; i++) {
      const price = minPrice + priceStep * i
      const y = padding.top + chartHeight - ((price - minPrice) / (maxPrice - minPrice)) * chartHeight

      ctx.fillText(price.toLocaleString(undefined, { maximumFractionDigits: 0 }), padding.left - 5, y + 3)
    }
  }

  // Draw time scale
  const drawTimeScale = (ctx, data, padding, chartWidth, chartHeight, candleWidth, candleSpacing) => {
    ctx.fillStyle = "#8a8a8a"
    ctx.font = "10px monospace"
    ctx.textAlign = "center"

    const timeStep = Math.max(1, Math.floor(data.length / 10))
    for (let i = 0; i < data.length; i += timeStep) {
      const candle = data[i]
      const x = padding.left + i * (chartWidth / data.length) + chartWidth / data.length / 2

      const timeLabel = candle.time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      ctx.fillText(timeLabel, x, padding.top + chartHeight + 15)
    }
  }

  // Draw volume bars
  const drawVolumeBars = (ctx, data, padding, chartWidth, chartHeight, candleWidth, candleSpacing) => {
    // Find max volume for scaling
    const maxVolume = Math.max(...data.map((candle) => candle.volume))
    const volumeHeight = chartHeight * 0.15 // Use 15% of chart height for volume

    data.forEach((candle, i) => {
      const x = padding.left + i * (chartWidth / data.length)
      const barWidth = (chartWidth / data.length) * 0.8

      const volumeRatio = candle.volume / maxVolume
      const barHeight = volumeHeight * volumeRatio
      const y = padding.top + chartHeight - barHeight

      // Set color based on candle type
      const isBullish = candle.close > candle.open
      ctx.fillStyle = isBullish ? "rgba(76, 175, 80, 0.3)" : "rgba(255, 82, 82, 0.3)"

      ctx.fillRect(x, y, barWidth, barHeight)
    })
  }

  // Draw candlesticks
  const drawCandles = (ctx, data, padding, chartHeight, minPrice, maxPrice, chartWidth, candleWidth, candleSpacing) => {
    data.forEach((candle, i) => {
      const x = padding.left + i * (chartWidth / data.length)
      const barWidth = (chartWidth / data.length) * 0.8

      // Calculate y positions
      const openY = padding.top + chartHeight - ((candle.open - minPrice) / (maxPrice - minPrice)) * chartHeight
      const closeY = padding.top + chartHeight - ((candle.close - minPrice) / (maxPrice - minPrice)) * chartHeight
      const highY = padding.top + chartHeight - ((candle.high - minPrice) / (maxPrice - minPrice)) * chartHeight
      const lowY = padding.top + chartHeight - ((candle.low - minPrice) / (maxPrice - minPrice)) * chartHeight

      // Determine if candle is bullish (close > open) or bearish
      const isBullish = candle.close > candle.open

      // Draw candle body
      if (isBullish) {
        ctx.fillStyle = "#26a69a" // Green for bullish
        ctx.strokeStyle = "#26a69a"
      } else {
        ctx.fillStyle = "#ef5350" // Red for bearish
        ctx.strokeStyle = "#ef5350"
      }

      const bodyHeight = Math.max(Math.abs(closeY - openY), 1)
      ctx.fillRect(x, isBullish ? closeY : openY, barWidth, bodyHeight)

      // Draw wick with same color
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(x + barWidth / 2, highY)
      ctx.lineTo(x + barWidth / 2, isBullish ? closeY : openY)
      ctx.moveTo(x + barWidth / 2, isBullish ? openY : closeY)
      ctx.lineTo(x + barWidth / 2, lowY)
      ctx.stroke()
    })
  }

  // Draw trading signals
  const drawSignals = (
    ctx,
    signals,
    data,
    padding,
    chartHeight,
    minPrice,
    maxPrice,
    chartWidth,
    candleWidth,
    candleSpacing,
  ) => {
    signals.forEach((signal) => {
      if (signal.candle >= data.length - 50 && signal.candle < data.length) {
        const adjustedIndex = signal.candle - (data.length - 50)
        const x = padding.left + adjustedIndex * (chartWidth / data.length) + chartWidth / data.length / 2
        const y = padding.top + chartHeight - ((signal.price - minPrice) / (maxPrice - minPrice)) * chartHeight

        ctx.lineWidth = 2

        if (signal.type === "buy") {
          // Draw buy signal (green triangle)
          ctx.fillStyle = "#4CAF50"
          ctx.strokeStyle = "#4CAF50"

          ctx.beginPath()
          ctx.moveTo(x, y - 10)
          ctx.lineTo(x - 5, y)
          ctx.lineTo(x + 5, y)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()

          // Draw risk/reward label
          ctx.font = "bold 10px monospace"
          ctx.fillStyle = "#4CAF50"
          ctx.textAlign = "center"
          ctx.fillText(`R:R ${signal.riskReward}`, x, y - 15)
        } else {
          // Draw sell signal (red triangle)
          ctx.fillStyle = "#FF5252"
          ctx.strokeStyle = "#FF5252"

          ctx.beginPath()
          ctx.moveTo(x, y + 10)
          ctx.lineTo(x - 5, y)
          ctx.lineTo(x + 5, y)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()

          // Draw risk/reward label
          ctx.font = "bold 10px monospace"
          ctx.fillStyle = "#FF5252"
          ctx.textAlign = "center"
          ctx.fillText(`R:R ${signal.riskReward}`, x, y + 20)
        }
      }
    })
  }

  // Calculate Moving Average
  const calculateMA = (data, period) => {
    const result = []

    for (let i = 0; i < data.length; i++) {
      if (i < period - 1) {
        result.push(null)
      } else {
        let sum = 0
        for (let j = 0; j < period; j++) {
          sum += data[i - j].close
        }
        result.push(sum / period)
      }
    }

    return result
  }

  // Draw Moving Average line
  const drawMA = (
    ctx,
    maData,
    padding,
    chartHeight,
    minPrice,
    maxPrice,
    chartWidth,
    candleWidth,
    candleSpacing,
    color,
    label,
  ) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 1.5
    ctx.beginPath()

    let firstPoint = true
    let lastX, lastY

    maData.forEach((value, i) => {
      if (value !== null) {
        const x = padding.left + i * (chartWidth / maData.length) + chartWidth / maData.length / 2
        const y = padding.top + chartHeight - ((value - minPrice) / (maxPrice - minPrice)) * chartHeight

        if (firstPoint) {
          ctx.moveTo(x, y)
          firstPoint = false
        } else {
          ctx.lineTo(x, y)
        }

        lastX = x
        lastY = y
      }
    })

    ctx.stroke()

    // Add label at the end of the line
    if (lastX && lastY) {
      ctx.font = "bold 10px monospace"
      ctx.fillStyle = color
      ctx.textAlign = "left"
      ctx.fillText(label, lastX + 5, lastY + 3)
    }
  }

  // Handle timeframe selection
  const handleTimeframeChange = (timeframe) => {
    setSelectedTimeframe(timeframe)
    // In a real app, this would fetch new data for the selected timeframe
  }

  return (
    <div className="trading-terminal-container w-full h-full bg-[#0D1117] rounded-lg overflow-hidden shadow-2xl flex flex-col">
      {/* Terminal header */}
      <div className="terminal-header flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-[#30363D]">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:opacity-80 transition-opacity"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:opacity-80 transition-opacity"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:opacity-80 transition-opacity"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono flex items-center">
            <span className="mr-2">📊</span>
            AlgoTrader Terminal v3.5
          </div>
        </div>
        <div className="flex space-x-3 text-gray-500 text-xs">
          <div className="px-2 py-1 bg-green-900 text-green-400 rounded">LIVE</div>
          <div>CPU: 42%</div>
          <div>MEM: 1.2GB</div>
        </div>
      </div>

      {/* Terminal content - Make scrollable */}
      <div ref={containerRef} className="terminal-content-scrollable flex-grow overflow-y-auto">
        <div className="terminal-content grid grid-cols-12 gap-2 p-3 min-h-full">
          {/* Left column - Market data */}
          <div className="col-span-4 flex flex-col gap-2">
            <div className="bg-[#161B22] p-3 rounded border border-[#30363D] h-1/2 overflow-hidden">
              <div className="text-xs text-gray-400 mb-2 flex justify-between items-center">
                <span>MARKET DATA</span>
                <span className="px-1 bg-[#0D1117] rounded text-green-400">LIVE</span>
              </div>
              <div className="space-y-2 text-xs">
                {Object.entries(stockData).map(([symbol, data]) => (
                  <div key={symbol} className="flex justify-between items-center">
                    <span className="font-bold">{symbol}</span>
                    <span>${data.price.toLocaleString()}</span>
                    <span className={data.change >= 0 ? "text-green-400" : "text-red-400"}>
                      {data.change >= 0 ? "+" : ""}
                      {data.change}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#161B22] p-3 rounded border border-[#30363D] h-1/2 overflow-hidden">
              <div className="text-xs text-gray-400 mb-2">ACTIVE ALGORITHMS</div>
              <div className="space-y-2 text-xs">
                {activeAlgorithms.map((algo) => (
                  <div key={algo.id} className="flex justify-between items-center">
                    <span className="font-bold">{algo.name}</span>
                    <span
                      className={`px-1 rounded ${
                        algo.status === "RUNNING"
                          ? "bg-green-900 text-green-400"
                          : algo.status === "ANALYZING"
                            ? "bg-blue-900 text-blue-400"
                            : "bg-yellow-900 text-yellow-400"
                      }`}
                    >
                      {algo.status}
                    </span>
                    <span className={algo.profit.startsWith("+") ? "text-green-400" : "text-gray-400"}>
                      {algo.profit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle column - Chart */}
          <div className="col-span-5 bg-[#161B22] rounded border border-[#30363D] p-3">
            <div className="text-xs text-gray-400 mb-2 flex justify-between items-center">
              <span>BTC/USD CANDLESTICK CHART</span>
              <div className="flex space-x-2">
                {["1H", "4H", "1D", "1W"].map((timeframe) => (
                  <button
                    key={timeframe}
                    className={`px-1 rounded ${
                      selectedTimeframe === timeframe
                        ? "bg-[#238636] text-white"
                        : "bg-[#0D1117] text-gray-400 hover:bg-[#1f2937]"
                    }`}
                    onClick={() => handleTimeframeChange(timeframe)}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-[300px] w-full">
              <canvas ref={chartCanvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }}></canvas>
            </div>
          </div>

          {/* Right column - Terminal logs */}
          <div className="col-span-3 bg-[#161B22] rounded border border-[#30363D] p-3">
            <div className="text-xs text-gray-400 mb-2">TERMINAL OUTPUT</div>
            <div ref={terminalRef} className="terminal-logs h-[300px] overflow-y-auto text-xs font-mono">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={`mb-1 ${
                    log.type === "info"
                      ? "text-blue-400"
                      : log.type === "trade"
                        ? "text-green-400"
                        : log.type === "alert"
                          ? "text-yellow-400"
                          : "text-white"
                  }`}
                >
                  <span className="opacity-70">[{new Date().toLocaleTimeString()}]</span> {log.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="terminal-statusbar flex justify-between items-center px-4 py-1 bg-[#238636] text-white text-xs">
        <div className="flex items-center space-x-4">
          <span>CONNECTED</span>
          <span>PING: 24ms</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>API v3.5</span>
          <span>TRADES: 24/hr</span>
          <span>P/L: +4.32%</span>
        </div>
      </div>
    </div>
  )
}

export default TradingTerminalWindow
