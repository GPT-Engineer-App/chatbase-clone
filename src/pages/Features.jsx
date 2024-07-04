const Features = () => {
  return (
    <div className="container mx-auto p-6">
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
    </div>
  );
};

export default Features;