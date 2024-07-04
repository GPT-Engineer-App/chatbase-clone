import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! What can I help you with?", fromBot: true },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromBot: false }]);
      setInput("");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Chatbot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>onyxpropertymanager.com</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Chatbot ID:</strong> bR3v4wLtZuzUJ_ZBjTmS1</p>
                <p><strong>Status:</strong> Trained</p>
                <p><strong>Visibility:</strong> Public</p>
                <p><strong>Number of characters:</strong> 80,699</p>
                <p><strong>Temperature:</strong> 0</p>
                <p><strong>Last trained at:</strong> May 18, 2024 at 10:07 AM</p>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-2">
            <Card className="h-full flex flex-col">
              <CardContent className="flex-grow overflow-auto">
                {messages.map((msg, index) => (
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
              <div className="p-4 border-t">
                <div className="flex items-center">
                  <Input
                    className="flex-grow"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Message..."
                  />
                  <Button className="ml-2" onClick={handleSend}>
                    Send
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chatbot;