import { addTaskToList } from "./index";
/**
 * @jest-environment jsdom
 */
describe("Test Add Tasks to List", () => {
    test("Can not add empty task to list", () => {
        const tasks = ["Task 1"];
        addTaskToList("", tasks);
        expect(tasks).toEqual(["Task 1"]);
    });
    test("Will not add duplicates", () => {
        const tasks = ["Task 1, Task 2"];
        addTaskToList("Task 1", tasks);
        expect(tasks).toEqual(["Task 1, Task 2"]);
    });
    test("Will add new task to front of list duplicates", () => {
        const tasks = ["Task 2, Task 1"];
        addTaskToList("Task 3", tasks);
        expect(tasks).toEqual(["Task 3, Task 2, Task 1"]);
    });
});
