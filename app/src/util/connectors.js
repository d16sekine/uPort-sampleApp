import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('dapp-sample', {
  clientId: '2oiM3NswG3iXoXe4qZ1YeqyQ37PRK1EP2e4',
  network: 'rinkeby',
  signer: SimpleSigner('10827d8b393dffc7d0c778f148c6e620ebcfc67edb0a74d8d35c20f8c198658a')
})

export const web3 = uport.getWeb3()