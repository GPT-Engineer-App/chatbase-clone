import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Voicebot = () => {
  const [isListening, setIsListening] = useState(false);
  const [responses, setResponses] = useState([
    { text: "Hello! How can I assist you today?", fromBot: true },
  ]);

  const handleVoiceInteraction = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate a voice response
      setTimeout(() => {
        setResponses([
          ...responses,
          { text: "This is a simulated voice response.", fromBot: true },
        ]);
      }, 2000);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Voicebot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Voicebot Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Status:</strong> {isListening ? "Listening..." : "Idle"}</p>
                <Button className="mt-4" onClick={handleVoiceInteraction}>
                  {isListening ? "Stop" : "Start"} Listening
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-2">
            <Card className="h-full flex flex-col">
              <CardContent className="flex-grow overflow-auto">
                {responses.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-4 p-2 rounded ${
                      msg.fromBot ? "bg-gray-200" : "bg-blue-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Voicebot;