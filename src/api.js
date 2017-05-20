import qs from 'qs'
const apiEndpoint = process.env.REACT_APP_API

const getUserInfoFromQrCodeValue = async (qrCodeValue) => {
  return Promise.resolve({
    name: 'John Doe',
    email: 'john@doe.com',
    description: 'Life enthusiast',
    iconColor: 'rebeccapurple'
  })
}

const getBasicUserInfo = async () => {
  return Promise.resolve({
    name: 'John Smith',
    email: 'john@smith.com',
    description: 'One and the same',
    iconColor: 'orange'
  })
}

const getProfileStats = async () => {
  const date = {
    date: Date.now().toISOString()
  }
  return {
    given: [{
      date,
      numberOfGiven: 2,
      totalAmount: 12.23,
    }],
    received: [{
      date,
      numberOfReceived: 1,
      totalAmount: 13.23
    }],
  }
}

const getHistory = async () => {
  const date = {
    date: Date.now().toISOString()
  }
  return {
    given: [{
      date,
      amount: 5,    
      message: 'Great service',
      recipientColor: 'yellow',
      recipientName: 'Shamrock the Readhead',
    }],
    received: [{
      date,
      amount: 9,
      message: 'You made me smile!',
    }],
  }
}

const getProfileAccounts = async () => {
  return [{
    account: {
      id: 'iad',
      name: 'Moje konto',
      iban: '9018340192384012934',
    },
    bank: {
      id: 'alwer',
      name: 'Some bank',
    }
  }]
}

const giveTip = async ({recipientGuid, amount, message}) => {
  return {}
}

const setIncomingAccount = async ({accountId, bankId, iban}) => {
  return {}
}

const setOutgoingAccount = async ({accountId, bankId, iban}) => {
  return {}
}

const getPendingPayments = async () => {
  return [{
    name: 'PLAY', amount: '50'
  }, {
    name: 'czynsz', amount: '850.23'
  }]
}

const login = async (username, password) => {
  if (!apiEndpoint) {
    return {token: 'asdf'}
  }

  const b = new FormData()
  b.append('username', username)
  b.append('password', password)

  const response = await fetch(
    `${apiEndpoint}/auth`,
    {
      method: 'POST',
      body: b
    }
  )

  if (response.status < 200 || response.status >= 300) {
    return {error: response.statusText} 
  }

  return response.json()
}

export {
  getUserInfoFromQrCodeValue,
  getBasicUserInfo,
  getProfileStats,
  getHistory,
  giveTip,
  getProfileAccounts,
  setIncomingAccount,
  setOutgoingAccount,
  
  getPendingPayments,
  login,
}
