export function createRfid(rfid, name, state = true) {
  return (dispatch, getState) => {
    new Promise((resolve, reject) => {
      let data = {
        btList: {
          [rfid]: name,
        },
        btState: {
          [rfid]: state
        }
      };
      dispatch({
        type: "RFID_CREATE_ITEM",
        obj: data
      }).then(() => {
        resolve();
      }).catch(err => {
        console.log(err);
        reject(err);
      })
    })
  }
}

