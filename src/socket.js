const channel = new BroadcastChannel('realtime-board');

export const emitUpdate = (data) => {
  channel.postMessage(data);
};

export const onUpdate = (callback) => {
  channel.onmessage = (event) => {
    callback(event.data);
  };
};
