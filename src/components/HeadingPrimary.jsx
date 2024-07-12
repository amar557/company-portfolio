function HeadingPrimary({ children }) {
  return (
    <h1 className=" leading-tight md:leading-relaxed sm:text-3xl text-2xl md:text-4xl font-bold">
      {children}
    </h1>
  );
}

export default HeadingPrimary;
