class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.currentTime += 1
      if(printTimeCallback) {
        printTimeCallback()
      }
    }, 1000) 
    this.intervalId = this.intervalId
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60 
  }

  computeTwoDigitNumber(value) {
    
  }

  stop() {
    
  }

  reset() {
    
  }

  split() {
    
  }
}
