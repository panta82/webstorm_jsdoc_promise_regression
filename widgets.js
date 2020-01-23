class Widget {
  constructor(member) {
    this.member = member;
  }
}

/**
 * @return {Promise<Widget>}
 */
function makeWidget() {
  return Promise.resolve(new Widget('test'));
}

module.exports = {
  makeWidget
};