import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="container mx-auto p-6">
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
    </div>
  );
};

export default Pricing;