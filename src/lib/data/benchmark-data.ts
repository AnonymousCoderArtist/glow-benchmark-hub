export interface BenchmarkMetric {
  name: string;
  value: number;
  description: string;
  color: string;
}

export interface ModelBenchmark {
  id: string;
  name: string;
  metrics: {
    emotional_recognition: number;
    emotional_adaptability: number;
    trust_building: number;
    cultural_awareness: number;
    long_term_impact: number;
  };
  overall_average: number;
}

export const modelBenchmarks: ModelBenchmark[] = [
  {
    id: "gpt4",
    name: "GPT-4",
    metrics: {
      emotional_recognition: 85.4,
      emotional_adaptability: 82.7,
      trust_building: 79.9,
      cultural_awareness: 81.2,
      long_term_impact: 83.5
    },
    overall_average: 82.54
  },
  {
    id: "claude2",
    name: "Claude 2",
    metrics: {
      emotional_recognition: 83.2,
      emotional_adaptability: 80.5,
      trust_building: 82.1,
      cultural_awareness: 79.8,
      long_term_impact: 81.3
    },
    overall_average: 81.38
  },
  {
    id: "helpingai",
    name: "HelpingAI",
    metrics: {
      emotional_recognition: 61.84,
      emotional_adaptability: 61.12,
      trust_building: 54.59,
      cultural_awareness: 49.59,
      long_term_impact: 67.14
    },
    overall_average: 58.86
  },
  {
    id: "gemini",
    name: "Gemini Pro",
    metrics: {
      emotional_recognition: 78.5,
      emotional_adaptability: 76.8,
      trust_building: 75.2,
      cultural_awareness: 77.4,
      long_term_impact: 76.9
    },
    overall_average: 76.96
  }
];

export const metricDescriptions = {
  emotional_recognition: {
    title: "Emotional Recognition",
    description: "Ability to accurately identify and understand emotions in text",
    color: "#FF6B6B"
  },
  emotional_adaptability: {
    title: "Emotional Adaptability",
    description: "Capability to adjust responses based on emotional context",
    color: "#4ECDC4"
  },
  trust_building: {
    title: "Trust Building",
    description: "Effectiveness in creating psychological safety and rapport",
    color: "#4A90E2"
  },
  cultural_awareness: {
    title: "Cultural Awareness",
    description: "Understanding and respect for cultural nuances and differences",
    color: "#9B6B9W"
  },
  long_term_impact: {
    title: "Long-term Impact",
    description: "Potential for sustained positive emotional influence",
    color: "#66BB6A"
  }
};