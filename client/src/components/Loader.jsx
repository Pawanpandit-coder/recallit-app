const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-[9999]">
      
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

    </div>
  );
};

export default Loader;