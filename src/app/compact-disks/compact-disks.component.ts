import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompactDiskService } from '../compact-disk.service';
import { CompactDisk } from '../models/compact-disk';

@Component({
  selector: 'app-compact-disks',
  templateUrl: './compact-disks.component.html',
  styleUrls: ['./compact-disks.component.css']
})
export class CompactDisksComponent implements OnInit {
  compactDisks$: Observable<CompactDisk[]>;
  constructor(private compactDiskService: CompactDiskService) { 
  }

  ngOnInit(): void {
    this.loadCDs();
  }

  loadCDs(){
    this.compactDisks$ = this.compactDiskService.getCDs();
  }

  delete(id) {
    const ans = confirm('Do you want to delete the CD?');
    if (ans) {
      this.compactDiskService.deleteCompactDisk(id).subscribe((data) => { 
      this.loadCDs();
      });
    }
  }

}
