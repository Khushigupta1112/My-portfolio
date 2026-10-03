import React, { useState, useEffect } from 'react';
import { Terminal, Play, RotateCcw, AlertTriangle, CheckCircle, Server, Activity, ShieldAlert, Cpu, ArrowRightLeft } from 'lucide-react';

export default function DeploySimulator() {
  const [deployMode, setDeployMode] = useState('canary'); // 'blue-green' or 'canary'
  const [canaryRatio, setCanaryRatio] = useState(20); // 20% to Canary (v2), 80% to Blue (v1)
  const [blueHealth, setBlueHealth] = useState(100);
  const [greenHealth, setGreenHealth] = useState(100);
  const [logs, setLogs] = useState([
    { time: new Date().toLocaleTimeString(), msg: '[INIT] CI/CD Pipeline initialized. Blue (v1.4.0) active on port 8080.', type: 'info' },
    { time: new Date().toLocaleTimeString(), msg: '[CANARY] Deploying Canary (v2.0.0) with 20% traffic split.', type: 'info' }
  ]);
  const [requestsCount, setRequestsCount] = useState(1420);
  const [activeTab, setActiveTab] = useState('live');

  // Traffic request counter ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setRequestsCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const addLog = (msg, type = 'info') => {
    setLogs((prev) => [
      { time: new Date().toLocaleTimeString(), msg, type },
      ...prev.slice(0, 19)
    ]);
  };

  const handleSimulateFailure = () => {
    setGreenHealth(35);
    addLog('[ALERT] High Error Rate & 500 Responses detected in Canary (v2.0.0)!', 'error');
    
    setTimeout(() => {
      addLog('[HEALTH-CHECK] Health Probes failed: HTTP GET /health returned 503 Service Unavailable.', 'error');
    }, 1000);

    setTimeout(() => {
      addLog('[ROLLBACK] Automated Rollback triggered! Routing 100% traffic back to Blue (v1.4.0).', 'success');
      setCanaryRatio(0);
      setGreenHealth(100);
    }, 2500);
  };

  const handleReset = () => {
    setBlueHealth(100);
    setGreenHealth(100);
    setCanaryRatio(20);
    addLog('[RESET] Cluster state restored to healthy baseline.', 'info');
  };

  return (
    <section id="simulator" className="py-20 bg-slate-950/90 border-y border-slate-800 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-code mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive DevOps Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Blue-Green & Canary Deployment Visualizer
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Test Khushi's zero-downtime release logic in real time. Simulate traffic splits, trigger chaos failures, and observe automated rollbacks.
          </p>
        </div>

        {/* Simulator Dashboard Container */}
        <div className="glass-panel rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-code text-slate-400">Deployment Strategy:</span>
              <div className="flex rounded-lg bg-slate-950 p-1 border border-slate-800">
                <button
                  onClick={() => { setDeployMode('canary'); setCanaryRatio(20); addLog('[STRATEGY] Switched to Canary Deployment mode.'); }}
                  className={`px-3 py-1 text-xs font-code rounded-md transition-colors ${deployMode === 'canary' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  Canary (Weighted)
                </button>
                <button
                  onClick={() => { setDeployMode('blue-green'); setCanaryRatio(0); addLog('[STRATEGY] Switched to Blue-Green (0/100 Switch) mode.'); }}
                  className={`px-3 py-1 text-xs font-code rounded-md transition-colors ${deployMode === 'blue-green' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  Blue-Green Switch
                </button>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-6 text-xs font-code text-slate-300">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Requests Routed:</span>
                <span className="text-cyan-400 font-bold">{requestsCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-400" />
                <span>Cluster Node:</span>
                <span className="text-emerald-400 font-semibold">k8s-us-east-1</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleSimulateFailure}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-800/80 text-rose-300 hover:bg-rose-900 text-xs font-code transition-colors"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Simulate Node Failure</span>
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-code transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Cluster</span>
              </button>
            </div>

          </div>

          {/* Main Visualization Grid */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Controls & Nodes */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Traffic Split Slider */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between mb-3 text-xs font-code">
                  <span className="text-slate-300 font-semibold flex items-center gap-2">
                    <ArrowRightLeft className="w-4 h-4 text-cyan-400" />
                    Live Traffic Ingress Split
                  </span>
                  <span className="text-cyan-400 font-bold">
                    Blue: {100 - canaryRatio}% | Green/Canary: {canaryRatio}%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={canaryRatio}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setCanaryRatio(val);
                    addLog(`[TRAFFIC] Updated traffic split: ${100 - val}% Blue / ${val}% Green`);
                  }}
                  className="w-full accent-cyan-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-[10px] font-code text-slate-500 mt-2">
                  <span>100% Blue (v1.4)</span>
                  <span>50/50 Balanced</span>
                  <span>100% Green (v2.0)</span>
                </div>
              </div>

              {/* Node Cards Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Blue Environment Card */}
                <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-800/40 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-code bg-blue-900/80 text-blue-300 border border-blue-700">
                      PRIMARY BLUE (v1.4.0)
                    </span>
                    <span className="flex items-center gap-1 text-xs font-code text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {blueHealth}% Healthy
                    </span>
                  </div>

                  <div className="text-2xl font-bold font-display text-white mb-1">
                    {100 - canaryRatio}% Traffic
                  </div>
                  <p className="text-xs font-code text-slate-400 mb-4">Port: 8080 | Status: Active Stable</p>

                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${100 - canaryRatio}%` }}></div>
                  </div>
                </div>

                {/* Green/Canary Environment Card */}
                <div className={`p-5 rounded-2xl bg-emerald-950/30 border ${greenHealth < 50 ? 'border-rose-500/80 bg-rose-950/20' : 'border-emerald-800/40'} relative`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-code bg-emerald-900/80 text-emerald-300 border border-emerald-700">
                      CANARY GREEN (v2.0.0)
                    </span>
                    <span className={`flex items-center gap-1 text-xs font-code ${greenHealth < 50 ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {greenHealth < 50 ? <AlertTriangle className="w-3.5 h-3.5" /> : <CheckCircle className="w-3.5 h-3.5" />}
                      {greenHealth}% Health
                    </span>
                  </div>

                  <div className="text-2xl font-bold font-display text-white mb-1">
                    {canaryRatio}% Traffic
                  </div>
                  <p className="text-xs font-code text-slate-400 mb-4">Port: 8081 | Status: {greenHealth < 50 ? 'DEGRADED' : 'Deploying'}</p>

                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-500 ${greenHealth < 50 ? 'bg-rose-500' : 'bg-emerald-500'}`} style={{ width: `${canaryRatio}%` }}></div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Terminal Log Stream */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 font-code text-xs flex-1 flex flex-col">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 text-slate-400">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    CI/CD Deployment Stream
                  </span>
                  <span className="text-[10px] text-slate-500">Live Logs</span>
                </div>

                <div className="space-y-2 overflow-y-auto max-h-64 scrollbar-thin pr-1 text-[11px]">
                  {logs.map((log, i) => (
                    <div key={i} className="flex items-start gap-2 leading-tight">
                      <span className="text-slate-600 shrink-0">{log.time}</span>
                      <span className={log.type === 'error' ? 'text-rose-400 font-bold' : log.type === 'success' ? 'text-emerald-400 font-bold' : 'text-cyan-300'}>
                        {log.msg}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
