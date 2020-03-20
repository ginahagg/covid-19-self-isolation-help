import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Isolator } from "../isolator.model";
import { Observable } from "rxjs/internal/Observable";
import { map } from 'rxjs/operators';


@Component({
  selector: "app-people-isolating",
  templateUrl: "./people-isolating.page.html",
  styleUrls: ["./people-isolating.page.scss"]
})
export class PeopleIsolatingPage implements OnInit {
  isolators$: Observable<Array<Isolator>>;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.isolators$ = this.afs.collection<Isolator>("isolating-test").valueChanges().pipe(
        map((isolators: any) => {
            return isolators.filter(isolator => !isolator.resolved);
        })
    );
  }
}