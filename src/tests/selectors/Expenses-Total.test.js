import selectExpensesTotal from "../../selectors/Expenses-Total";
import expenses from "../fixtures/expenses";

test("Should return 0 if no expenses", () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test("Should add up expense", () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test("Should add up multiple expense", () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});
