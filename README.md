# EIP712 Example

Here is an example of using [eip712-codegen](https://www.npmjs.com/package/eip712-codegen) to generate solidity for recovering a [eip-712 signTypedData signature](https://docs.metamask.io/guide/signing-data.html#signing-data-with-metamask) in solidity.

To demonstrate, you can just `npm run generateTypes`.


The starting types are just a simple Bid, which has a `offer` property, which itself is a `TokenVector` struct! This allows you to see what it looks like to have a user sign a nested struct.

