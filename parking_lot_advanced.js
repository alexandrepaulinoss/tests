// Advanced parking lot
// It will simulate a parking lot with lots in three different size (car, motorcycle and bus).
//
// Usage:
//   - Create a parking: const parking = new ParkingLot(3, 3, 1);
//      - The ParkingLot parameter is the car parking size, the morotcycle parking size and the bus parking size
//   - parking.getSize();
//      - getSize() checks the parking size (lots number)
//   - parking.getAvailable();
//      - getAvailable() checks how many lots are available
//   - parking.getSlots();
//      - getSlots() checks wich lots are available
//   - parking.isFull();
//      - isFull checks if the parking is full
//   - parking.isEmpty();
//      - isEmpty checks if the parking is empty
//   - parking.park('a1', 'car');
//      - park('', 'car') add a 'car' to the parking (second parameter can be 'car', 'motorcycle' or 'bus)
//   - parking.remove('a2', 'car');
//      - remove('') removes a 'car' from the parking (second parameter can be 'car', 'motorcycle' or 'bus)

class ParkingLot {
  carSlots = [];
  motorcycleSlots = [];
  busSlots = [];

  constructor(carParkingSize, motorcycleParkingSize, busParkingSize) {
    this.carSlots = new Array(carParkingSize).fill(null);
    this.motorcycleSlots = new Array(motorcycleParkingSize).fill(null);
    this.busSlots = new Array(busParkingSize).fill(null);
  }

  park(vehicleId, type) {
    console.log(`Parking ${type}: ${vehicleId}...`);

    let canPark = true;

    const availablePark = this.getAvailable();
    console.log('available: ', availablePark);

    if (type === 'motorcycle' && this.motorcycleSlots.every((slot) => slot !== null) && this.busSlots.every((slot) => slot !== null) && this.carSlots.every((slot) => slot !== null)) {
      canPark = false;
    }

    if (this.carSlots.every((slot) => slot !== null) && this.busSlots.every((slot) => slot !== null)) {
      canPark = false;
    }

    if (type === 'bus' && this.busSlots.every((slot) => slot !== null)) {
      canPark = false;
    }

    if (!canPark) {
      console.log(`Could not park ${type} ${vehicleId}`);
      return false;
    }


    if (type === 'bus' || (type ==='car' && availablePark[0] === 0) || (type ==='motorcycle' && availablePark[1] === 0)) {
      for (let i = 0; i <= this.busSlots.length; i++) {
        const slot = this.busSlots[i];

        if (slot === null) {
          this.busSlots[i] = vehicleId;
          console.log(`${type} ${vehicleId} parked on BusPark ${i+1}`);
          return true;
        }
      }
    }

    if (type ==='car' || (type ==='motorcycle' && availablePark[1] === 0)) {
      for (let i = 0; i <= this.carSlots.length; i++) {
        const slot = this.carSlots[i];

        if (slot === null) {
          this.carSlots[i] = vehicleId;
          console.log(`${type} ${vehicleId} parked on CarPark ${i+1}`);
          return true;
        }
      }
    }

    if (type === 'motorcycle') {
      for (let i = 0; i <= this.motorcycleSlots.length; i++) {
        const slot = this.motorcycleSlots[i];

        if (slot === null) {
          this.motorcycleSlots[i] = vehicleId;
          console.log(`${type} ${vehicleId} parked on MotorcyclePark ${i+1}`);
          return true;
        }
      }
    }
  }

  remove(vehicleId) {
    console.log(`Leaving vehicle ${vehicleId}...`);

    const isInCarPark = this.carSlots.every((slot) => slot !== vehicleId)
    const isInMotorcyclePark = this.motorcycleSlots.every((slot) => slot !== vehicleId)
    const isInBusPark = this.busSlots.every((slot) => slot !== vehicleId)


    if (isInCarPark && isInMotorcyclePark && isInBusPark) {
      console.log(`Vehicle ${vehicleId} is not here`)
      return false;
    }

    if (!isInCarPark) {
      for (let i = 0; i <= this.carSlots.length; i++) {
        const slot = this.carSlots[i];
  
        if (slot === vehicleId) {
          this.carSlots[i] = null;
          console.log(`Vehicle ${vehicleId} leaved and CarPark ${i+1} is free now`);
          return true;
        }
      }
    }

    if (!isInMotorcyclePark) {
      for (let i = 0; i <= this.motorcycleSlots.length; i++) {
        const slot = this.motorcycleSlots[i];
  
        if (slot === vehicleId) {
          this.motorcycleSlots[i] = null;
          console.log(`Vehicle ${vehicleId} leaved and MotorcyclePark ${i+1} is free now`);
          return true;
        }
      }
    }

    if (!isInBusPark) {
      for (let i = 0; i <= this.busSlots.length; i++) {
        const slot = this.busSlots[i];
  
        if (slot === vehicleId) {
          this.busSlots[i] = null;
          console.log(`Vehicle ${vehicleId} leaved and BusPark ${i+1} is free now`);
          return true;
        }
      }
    }

  }

  getSlots() {
    console.log(`Car parking slots occupation: ${this.carSlots}`);
    console.log(`Motorcycle parking slots occupation: ${this.motorcycleSlots}`);
    console.log(`Bus parking slots occupation: ${this.busSlots}`);

    return [this.carSlots, this.motorcycleSlots, this.busSlots]
  }

  getSize() {
    console.log(`Car parking size is: ${this.carSlots.length}`);
    console.log(`Motorcycle parking size is: ${this.motorcycleSlots.length}`);
    console.log(`Bus parking size is: ${this.busSlots.length}`);

    return [this.carSlots.length, this.motorcycleSlots.length, this.busSlots.length];
  }

  getAvailable() {
    const availableCarSlots = this.carSlots.filter((s) => s === null).length;
    const availableMotorcycleSlots = this.motorcycleSlots.filter((s) => s === null).length;
    const availableBusSlots = this.busSlots.filter((s) => s === null).length;

    console.log(`Available car parking slots: ${availableCarSlots}`);
    console.log(`Available motorcycle parking slots: ${availableMotorcycleSlots}`);
    console.log(`Available bus parking slots: ${availableBusSlots}`);

    return [availableCarSlots, availableMotorcycleSlots, availableBusSlots];
  }

  isFull() {
    if (this.carSlots.filter((s) => s === null).length + this.motorcycleSlots.filter((s) => s === null).length + this.busSlots.filter((s) => s === null).length === 0) {
      return console.log('Parking is full');
    }
    return console.log('Parking is NOT full');
  }

  isEmpty() {
    if (this.carSlots.filter((s) => s === null).length + this.motorcycleSlots.filter((s) => s === null).length + this.busSlots.filter((s) => s === null).length === this.carSlots.length + this.motorcycleSlots.length + this.busSlots.length) {
      return console.log('Parking is empty');
    }
    return console.log('Parking is NOT empty');
  }
}



const parking = new ParkingLot(3, 3, 1);

parking.getSize();
parking.getAvailable();
parking.getSlots();
parking.isFull();
parking.isEmpty();
parking.park('c1', 'car');
parking.park('c2', 'car');
parking.park('c3', 'car');
parking.getAvailable();
parking.getSlots();
parking.isFull();
parking.isEmpty();
parking.park('c4', 'car');
parking.park('c5', 'car');
parking.getAvailable();
parking.getSlots();
parking.isFull();
parking.isEmpty();
parking.remove('c2', 'car');
parking.getAvailable();
parking.getSlots();
parking.isFull();
parking.isEmpty();
parking.park('c6', 'car');
parking.getSlots();
parking.park('b1', 'bus');
parking.park('b2', 'bus');
parking.park('b3', 'bus');
parking.park('b4', 'bus');
parking.park('c7', 'car');
parking.getSlots();
parking.remove('b7');
parking.remove('c1');
parking.remove('c4');
parking.getSlots();
parking.park('b1', 'bus');
parking.park('b2', 'bus');
parking.park('m1', 'motorcycle');
parking.park('m2', 'motorcycle');
parking.park('m3', 'motorcycle');
parking.park('m4', 'motorcycle');
parking.park('m5', 'motorcycle');
parking.getSlots();
parking.remove('b1');
parking.park('m5', 'motorcycle');
parking.getSlots();
