const parseArgs = () => {
  const args = process.argv
    .slice(2)
    .reduce((acc, item, index, array) => {
      if (item.startsWith("--")) {
        const value = `${item.slice(2)} is ${array[index + 1]}`;
        acc.push(value);
      }
      return acc;
    }, [])
    .join(", ");

  console.log(args);
};

parseArgs();
