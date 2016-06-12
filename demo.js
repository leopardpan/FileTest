defineClass('MineViewController', {
  viewDidLoad: function() {
    console.log('JSPatch test...')
    self.ORIGviewDidLoad()
  }
})
