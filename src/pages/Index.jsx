import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Chatbase</h1>
        <p className="text-xl mb-8">Build and deploy chatbots with ease.</p>
        <Button className="mx-auto">Get Started</Button>
      </section>
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full"></div>
            <h3 className="text-2xl font-bold mb-2">Feature One</h3>
            <p>Brief description of feature one.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full"></div>
            <h3 className="text-2xl font-bold mb-2">Feature Two</h3>
            <p>Brief description of feature two.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full"></div>
            <h3 className="text-2xl font-bold mb-2">Feature Three</h3>
            <p>Brief description of feature three.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <p className="text-4xl font-bold mb-4">$10</p>
            <ul className="mb-4">
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <Button className="mx-auto">Sign Up</Button>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-4xl font-bold mb-4">$20</p>
            <ul className="mb-4">
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <Button className="mx-auto">Sign Up</Button>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-4xl font-bold mb-4">$30</p>
            <ul className="mb-4">
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <Button className="mx-auto">Sign Up</Button>
          </div>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border rounded" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border rounded" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border rounded" id="message" rows="4"></textarea>
          </div>
          <Button className="mx-auto">Send Message</Button>
        </form>
      </section>
    </div>
  );
};

export default Index;