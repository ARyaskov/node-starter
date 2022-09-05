async function main() {}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error.toString());
    process.exit(1);
  });
