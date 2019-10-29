const entryDate = document.getElementById("journalDate").value
const coveredConcepts = document.querySelector("#conceptCovered").value
const journalEntryRef = document.querySelector("#journalEntry").value
const moodEntry=document.querySelector("#moodForDay").value




const journalEntry1 = {
    date: entryDate,
    itemsCovered: coveredConcepts,
    notes: journalEntryRef,
    mood: moodEntry
}
console.log("testing", journalEntry1)

let allOfMyJournal = [

]

allOfMyJournal.push(journalEntry1)
console.log("testing2",allOfMyJournal)