export function createRfid(rfid, name, state = true) {
  return (dispatch) => {
    let data = {
      rfid: rfid,
      name: name,
      state: state
    };
  
    dispatch({
      type: "RFID_CREATE_ITEM",
      obj: data
    })
  }
}

export function changeRfid(rfid, state) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      let blueT = getState().rfid.blueT;
      let data = [];
      for (let key in blueT) {
        if (blueT.hasOwnProperty(key)) {
          let obj = blueT[key];
          if (rfid === obj.rfid) {
            obj.state = state;
          }
          data.push(obj);
        } else {
          reject(err);
        }
      }
      resolve(data);
    }).then((data) => {
      dispatch({
        type: "RFID_CHANGE_ITEM",
        obj: data
      })
    }).catch(err => {
      console.log(err);
    })
  }
}

export function removeRfid(rfid) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      let blueT = getState().rfid.blueT;
      let data = [];
      for (let key in blueT) {
        if (blueT.hasOwnProperty(key)) {
          let obj = blueT[key];
          if (rfid !== obj.rfid) {
            data.push(obj);
          }
        }
      }
      resolve(data);
    }).then((data) => {
      dispatch({
        type: "RFID_REMOVE_ITEM",
        obj: data
      })
    }).catch(err => {
      console.log(err);
    })
  }
}