import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./notes/NoteForm.js";
import { NoteList } from "./notes/NoteList.js";
// import "./criminals/AlibiList.js"
import { AlibiEventListener } from "./criminals/AlibiList.js";
import { witnessButton } from "./witnesses/Witness.js";
import { WitnessList } from "./witnesses/WitnessList.js";

CriminalList();

ConvictionSelect();

OfficerSelect();

NoteForm()

NoteList()

AlibiEventListener()

witnessButton()

WitnessList()