import {handlers} from "./reducer";
describe("Rectangle reducer", () => {
    it("has RECTANGLE_ADD handler", () => {
        expect(handlers["RECTANGLE_ADD"])
            .toEqual(expect.any(Function))
    });

    describe("given two rectangles (50x100) and (77x200)", () => {
        let result;
        beforeEach(()=>{
            const state = {
                all: [{ id: 1, width: 50, height: 100 }],
                totalWidth: 50
            };

            result = handlers["RECTANGLE_ADD"](
                state,
                {rectangle: { width: 77, height: 200 }}
            );
        })

        it("returns 127 totalWidth ", () => {
            expect(result).toEqual(expect.objectContaining(
                { totalWidth: 127 }
            ));
        });

        it("returns all rectangles", () => {
            expect(result).toEqual(expect.objectContaining(
                { all: [{ id: 1, width: 50, height: 100 }, { id: expect.any(Number), width: 77, height: 200 }] }
            ));
        });

    });
 
});