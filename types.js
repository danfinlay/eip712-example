const typedMessage = {
  primaryType: 'Bid',

  domain: {
    name: 'MyAuctionSite',
    version: '1',
    chainId: '1',
  },

  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ],
    Bid: [
      { name: 'item', type: 'string' },
      { name: 'offer', type: 'TokenVector' },
    ],
    TokenVector: [
      { name: 'token', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
   }

};

module.exports = typedMessage;


