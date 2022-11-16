import path from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { appendFile } from "node:fs";

export const contactsPath = path.resolve("./db/contacts.json");

export async function listContacts() {
  try {
    const contacts = await readFile(contactsPath, "utf8");
    console.log("Contacts list below: ");
    console.log(JSON.parse(contacts));
    // return contacts;
  } catch (error) {
    console.log(error);
  }
}

export async function getContactById(contactId) {
  try {
    const contacts = await readFile(contactsPath, "utf8");
    const parsedDataById = JSON.parse(contacts).filter(
      (item) => item.id === contactId
    );
    console.log(parsedDataById);
  } catch (error) {
    console.log(error);
  }
}

export async function removeContact(contactId) {
  try {
    const contacts = await readFile(contactsPath, "utf8");
    const parsedContacts = JSON.parse(contacts);
    const filteredData = parsedContacts.filter((item) => item.id !== contactId);
    await writeFile(contactsPath, JSON.stringify(filteredData), "utf8");
    // console.log(JSON.stringify(filteredData));
  } catch (error) {
    console.log(error);
  }
}

export async function addContact(name, email, phone) {
  try {
    const contacts = await readFile(contactsPath, "utf8");
    const parsedContacts = JSON.parse(contacts);
    const newContent = [...parsedContacts, { id: email, name, email, phone }];
    await writeFile(contactsPath, JSON.stringify(newContent), "utf8");
    // parsedContacts.push({ id: email, name, email, phone });
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}
