const parseEnv = () => {
  const variables = Object.entries(process.env)
    .reduce((acc, [key, value]) => {
      if (key.startsWith("RSS_")) {
        const item = `${key}=${value}`;
        acc.push(item);
      }
      return acc;
    }, [])
    .join("; ");

  console.log(variables);
};

parseEnv();
