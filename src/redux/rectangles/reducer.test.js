import {handlers} from './reducer';
import * as persistance from "./persistance";
describe('Rectangle reducer', () => {
    it("has RECTANGLE_GET_ALL handler", () => {
        expect(handlers["RECTANGLE_GET_ALL"])
            .toEqual(expect.any(Function))
    });

    describe("given two rectangles (50x100) and (77x200)", () => {
        beforeEach(()=>{
            persistance.getRectangles = jest.fn(() => [
              { width: 50, height: 100 },
              { width: 77, height: 200 }
            ]);
        })

        it("returns 127 totalWidth ", () => {
            expect(handlers["RECTANGLE_GET_ALL"]()).toEqual(expect.objectContaining(
                { totalWidth: 127 }
            ));
        });

        it("returns all rectangles", () => {
            expect(handlers["RECTANGLE_GET_ALL"]()).toEqual(expect.objectContaining(
                { all: [{ width: 50, height: 100 }, { width: 77, height: 200 }] }
            ));
        });

    });
 
});