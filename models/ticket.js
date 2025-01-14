const tickets = [];

class Ticket {
    constructor(id, lines = []) {
        this.id = id;
        this.lines = lines;
        this.checked = false;
    }

    addLines(newLines) {
        if (this.checked) throw new Error("Cannot amend a checked ticket.");
        this.lines = [...this.lines, ...newLines];
    }

    getStatus() {
        this.checked = true;
        const results = this.lines.map((line) => {
            const [a, b, c] = line;
            if (a + b + c === 2) return { line, result: 10 };
            if (a === b && b === c) return { line, result: 5 };
            if (a !== b && a !== c) return { line, result: 1 };
            return { line, result: 0 };
        });
        results.sort((a, b) => b.result - a.result);
        return results;
    }
}

module.exports = { Ticket, tickets };
