// Simple parking lot
// It will simulate a parking log with lots in only one size.
//
// Usage:
//   - Create a parking: const parking = new ParkingLot(5);
//      - The ParkingLot parameter is the parking size
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
//   - parking.park('a1');
//      - park('') add a 'car' to the parking
//   - parking.remove('a2');
//      - remove('') removes a 'car' from the parking

class ParkingLot {
  slots = [];

  constructor(parkingSize) {
    this.slots = new Array(parkingSize).fill(null);
  }

  park(carId) {
    console.log(`Parking car: ${carId}`);
    if (this.slots.every((slot) => slot !== null)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === null) {
        this.slots[i] = carId;
        return true;
      }
    }
  }

  remove(carId) {
    console.log(`Leaving car: ${carId}`);
    if (this.slots.every((slot) => slot !== carId)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === carId) {
        this.slots[i] = null;
        return true;
      }
    }
  }

  getSlots() {
    console.log(`Parking slots occupation: ${this.slots}`);
    return this.slots;
  }

  getSize() {
    console.log(`Parking size is: ${this.slots.length}`);
    return this.slots.length;
  }

  getAvailable() {
    const availableSlots = this.slots.filter((s) => s === null).length;
    console.log(`Available parking slots: ${availableSlots}`);
    return availableSlots;
  }

  isFull() {
    if (this.slots.filter((s) => s === null).length === 0) {
      return console.log('Parking is full');
    }
    return console.log('Parking is NOT full');
  }

  isEmpty() {
    if (this.slots.filter((s) => s === null).length === this.slots.length) {
      return console.log('Parking is empty');
    }
    return console.log('Parking is NOT empty');
  }
}



const parking = new ParkingLot(5);

parking.getSize();
parking.getAvailable();
parking.getSlots();
parking.isFull();
parking.isEmpty();
parking.park('a1');
parking.park('a2');
parking.park('a3');
parking.getAvailable();
parking.getSlots();
parking.isFull();
parking.isEmpty();
parking.park('a4');
parking.park('a5');
parking.getAvailable();
parking.getSlots();
parking.isFull();
parking.isEmpty();
parking.remove('a2');
parking.getAvailable();
parking.getSlots();
parking.isFull();
parking.isEmpty();
parking.park('a6');
parking.getSlots();
