import path from "node:path";
import { readFile, writeFile } from "node:fs";

export const contactsPath = path.resolve("./db/contacts.json");

export function listContacts() {
  readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const parsedData = JSON.parse(data);
    console.log(parsedData);
  });
}

export function getContactById(contactId) {
  readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const parsedDataById = JSON.parse(data).filter(
      (item) => item.id === contactId
    );
    console.log(parsedDataById);
  });
}

export function removeContact(contactId) {
  readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const newParsedData = JSON.parse(data).filter(
      (item) => item.id !== contactId
    );
    writeFile(contactsPath, JSON.stringify(newParsedData), (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Molodec, udalil conatcta s id ${contactId}`);
    });
  });
  //
}

function addContact(name, email, phone) {
  // ...твой код
}
