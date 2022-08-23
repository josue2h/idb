import { Inject, Injectable } from "@angular/core";
import { IDBPDatabase, openDB } from "idb";
import { from, Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class SchoolService {
  db: Promise<IDBPDatabase>;
constructor(){
}

initializeDB(): Observable<any> {
  return from(openDB('db-school', 1, {
    upgrade(dbs) {
      dbs.createObjectStore('tabla-person');

      const store = dbs.createObjectStore('person', {
        keyPath: 'idPerson',
        autoIncrement: true,
      });
    },
  }));
}

}