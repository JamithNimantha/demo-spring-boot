export class SETTINGS {
  // public static   HTTP_PREFIX='http://68.183.210.98:8080';
  public static HTTP_PREFIX = 'http://localhost:9090';
  // public static CLIENT_ID = 'clientapp';
  // public static SECRET_KEY = '123456';

  public static ENDPOINTS = {
    userLogin: {
      url: SETTINGS.HTTP_PREFIX + '/api/oauth/token',
      type: 'POST'
    },
    getLogedInUSer: {
      url: SETTINGS.HTTP_PREFIX + '/api/login/get-user',
      type: 'GET'
    },
    saveAidReceiver: {
      url: SETTINGS.HTTP_PREFIX + '/api/aid-receiver/create',
      type: 'POST'
    },
    updateAidReceiver: {
      url: SETTINGS.HTTP_PREFIX + '/api/aid-receiver/edit',
      type: 'POST'
    },
    deleteAidReceiver: {
      url: SETTINGS.HTTP_PREFIX + '/api/aid-receiver/delete',
      type: 'POST'
    },
    activateAidReceiver: {
      url: SETTINGS.HTTP_PREFIX + '/api/aid-receiver/activate',
      type: 'POST'
    },
    searchAidReceiverByNumber: {
      url: SETTINGS.HTTP_PREFIX + '/api/aid-receiver/search/number',
      type: 'POST'
    },
    searchAidReceiverByRegNumber: {
      url: SETTINGS.HTTP_PREFIX + '/api/aid-receiver/search/reg-number',
      type: 'POST'
    },
    saveGnDivison: {
      url: SETTINGS.HTTP_PREFIX + '/api/location/gn-division/save',
      type: 'POST'
    },
    updateGnDivision: {
      url: SETTINGS.HTTP_PREFIX + '/api/location/gn-division/update',
      type: 'POST'
    },
    saveVolOrg: {
      url: SETTINGS.HTTP_PREFIX + '/api/vol-org/create',
      type: 'POST'
    },
    updateVolOrg: {
      url: SETTINGS.HTTP_PREFIX + '/api/vol-org/update',
      type: 'POST'
    },
    deleteVolOrg: {
      url: SETTINGS.HTTP_PREFIX + '/api/vol-org/delete',
      type: 'POST'
    },
    searchVolOrgByNumber: {
      url: SETTINGS.HTTP_PREFIX + '/api/vol-org/search/number',
      type: 'POST'
    },
    searchVolOrgByRegNumber: {
      url: SETTINGS.HTTP_PREFIX + '/api/vol-org/search/reg-number',
      type: 'POST'
    },
    getAidReceiverPaymentInfo: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/payments',
      type: 'GET'
    },
    getAidReceiverPaymentList: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/aid-payments',
      type: 'GET'
    },
    downloadAidReceiverPaymentList: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/download/payment',
      type: 'GET'
    },
    downloadYearlyPaymentReport: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/download/yearly-payment',
      type: 'GET'
    },
    downloadDueAidReceiverPaymentList: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/download/due-payment',
      type: 'GET'
    },
    updateAidReceiverPayment: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/update',
      type: 'POST'
    },
    saveAidReceiverPayment: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/create',
      type: 'POST'
    },
    saveYearlyPayment: {
      url: SETTINGS.HTTP_PREFIX + '/api/yearly-allocation/save',
      type: 'POST'
    },
    retrieveYearlyPayment: {
      url: SETTINGS.HTTP_PREFIX + '/api/yearly-allocation/retrieve',
      type: 'POST'
    },
    downloadElderDisable: {
      url: SETTINGS.HTTP_PREFIX + '/api/aid-receiver/download/disable-elder',
      type: 'POST'
    },
    retrieveElderDisable: {
      url: SETTINGS.HTTP_PREFIX + '/api/aid-receiver/search/elder-disable',
      type: 'POST'
    },
    retrieveVolReport: {
      url: SETTINGS.HTTP_PREFIX + '/api/vol-org/report',
      type: 'POST'
    },
    downloadVolReport: {
      url: SETTINGS.HTTP_PREFIX + '/api/vol-org/download/vol-report',
      type: 'POST'
    },
    getPaymentDetails: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/report',
      type: 'GET'
    },
    getYearlyAidTypeWise: {
      url: SETTINGS.HTTP_PREFIX + '/api/yearly-allocation/report/aid-type',
      type: 'POST'
    },
    getYearlyDSWise: {
      url: SETTINGS.HTTP_PREFIX + '/api/yearly-allocation/report/ds',
      type: 'POST'
    },
    getMonthExpense: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/report/month-expense',
      type: 'POST'
    },
    downloadMonthlyReport1: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/download/monthly/expense-1',
      type: 'POST'
    },
    calculateYearlyAllocation: {
      url: SETTINGS.HTTP_PREFIX + '/api/yearly-allocation/calcullate-return',
      type: 'POST'
    },
    downloadYearlyAllocationReport3: {
      url: SETTINGS.HTTP_PREFIX + '/api/yearly-allocation/download/yearly/report-3',
      type: 'POST'
    },
    downloadYearlyAllocationReport4: {
      url: SETTINGS.HTTP_PREFIX + '/api/yearly-allocation/download/yearly/report-4',
      type: 'POST'
    },
    downloadYearlyAllocationReport5: {
      url: SETTINGS.HTTP_PREFIX + '/api/yearly-allocation/download/yearly/report-5',
      type: 'POST'
    },
    saveAllAidReceiverPayment: {
      url: SETTINGS.HTTP_PREFIX + '/api/payment-aid-receiver/createAll',
      type: 'POST'
    },
    activateVolOrg: {
      url: SETTINGS.HTTP_PREFIX + '/api/vol-org/activate',
      type: 'POST'
    },
    updatePassword: {
      url: SETTINGS.HTTP_PREFIX + '/api/user/update-password',
      type: 'POST'
    }
    // ,
    // login: {
    //   mockUrl: true,
    //   headerParam: {
    //     showLoading: true,
    //     showToast: true,
    //     excludeError: [401]
    //   },
    //   url: '/dcs/login',
    //   type: 'POST'
    // },
  }
}
