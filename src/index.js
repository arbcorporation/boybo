export default {
  async fetch(request) {
    return new Response("boybo Worker is running!", {
      headers: {
        "content-type": "text/plain;charset=UTF-8",
      },
    });
  },
};
