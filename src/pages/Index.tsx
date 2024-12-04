import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { modelBenchmarks, metricDescriptions } from "@/lib/data/benchmark-data";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Index = () => {
  const [selectedModel, setSelectedModel] = useState(modelBenchmarks[0]);

  const formatData = (model: typeof modelBenchmarks[0]) => {
    return Object.entries(model.metrics).map(([key, value]) => ({
      subject: metricDescriptions[key as keyof typeof metricDescriptions].title,
      value: value,
      fullMark: 100,
    }));
  };

  return (
    <div className="min-h-screen p-4 md:p-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="glow-card text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            HEIF Benchmark Results
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive evaluation of AI models' emotional intelligence capabilities
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Model Selection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Models</h2>
            <div className="space-y-2">
              {modelBenchmarks.map((model) => (
                <Button
                  key={model.id}
                  variant={selectedModel.id === model.id ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedModel(model)}
                >
                  <span className="flex items-center space-x-2">
                    <span>{model.name}</span>
                    <span className="ml-auto">{model.overall_average.toFixed(1)}</span>
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="md:col-span-2">
            <Card className="chart-container h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={formatData(selectedModel)}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name={selectedModel.name}
                    dataKey="value"
                    stroke="#4A90E2"
                    fill="#4A90E2"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>

        {/* Metrics Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(metricDescriptions).map(([key, metric]) => (
            <Card
              key={key}
              className={`metric-card ${key.split('_')[0]}`}
            >
              <h3 className="text-xl font-semibold">{metric.title}</h3>
              <p className="text-muted-foreground mt-2">{metric.description}</p>
              <div className="mt-4">
                <span className="text-3xl font-bold">
                  {selectedModel.metrics[key as keyof typeof selectedModel.metrics].toFixed(1)}
                </span>
                <span className="text-muted-foreground">/100</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Methodology */}
        <Card className="glow-card">
          <h2 className="text-2xl font-semibold mb-4">Evaluation Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Scoring System (0-100)</h3>
              <ul className="space-y-2">
                <li>0-20: Poor performance</li>
                <li>21-40: Below average performance</li>
                <li>41-60: Average performance</li>
                <li>61-80: Above average performance</li>
                <li>81-100: Excellent performance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="space-y-2">
                <li>Multi-Provider Support</li>
                <li>Comprehensive Evaluation</li>
                <li>Detailed Analytics</li>
                <li>Real-time Tracking</li>
                <li>Flexible Integration</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;