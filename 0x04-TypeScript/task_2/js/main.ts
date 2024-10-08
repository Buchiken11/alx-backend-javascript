Interface DirectorInterface {
    workFromHome(): string;
    getCoffee(): string
    workDirectorTasks(): string;
}

Interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {
	return "Working from home";
    }
    getCoffee(): string {
	return "Getting a coffee braek";
    }
    workDirectorTasks(): string {
	return "Getting to director tasks";
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
	return "Cannot work from home:;
    }
    getCoffeeBreak(): string {
	return "Cannot have a break";
    }
    workTeacherTasks(): string {
	return "Getting ro work";
    }
}
export function createEmployee(salary: number): string | number {
    if (typeof salary === "number" && salary > 500 {
	return new teacher;
    }
    return new Director;
}

export function isDirector(employee: (Director | Teacher)): employee is Director {
    return employee as instanceof  Director;
}

export function executeWork(employee: (Director | Teacher)) {
    if (isDirector(employee)) {
	return (employee as Director).workDurectorTasks();
    }
    return (employee as Teacher).workTeacherTasks;
}

export type Subjects('Math | History');

export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
	return ("Teaching Math");
    }
    if (todayClass === "History") {
	return ("Teaching History");
    }
}
