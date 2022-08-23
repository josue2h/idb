import { Inject, Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';
import { from, Observable, of } from 'rxjs';
import { Student } from '../models/Student';

@Injectable({ providedIn: 'root' })
export class SchoolService {
  db: any;
  constructor() {
    this.initializeDB();
  }

  async initializeDB(): Promise<void> {
    this.db = await openDB('db-school', 1, {
      upgrade(dbs) {
        dbs.createObjectStore('tabla-person');
        const store = dbs.createObjectStore('person', {
          keyPath: 'idPerson',
          autoIncrement: true,
        });
      },
    });
  }

  addStudent(student: Student): Observable<any> {
    return of(this.db.add(student));
  }

  getList(): Observable<any> {
    return of(this.db.getAll('tabla-person'));
  }
}
