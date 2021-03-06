import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StorageService } from '@app/core/services/storage.service';
import { DynamicDialogRef } from 'primeng-lts/dynamicdialog';

@Component({
  selector: 'app-delete-group-dialog',
  templateUrl: './delete-group-dialog.component.html',
  styleUrls: ['./delete-group-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteGroupDialogComponent {
  constructor(
    public ref: DynamicDialogRef,
    private storageService: StorageService
  ) { }

  removeGroup() {
    this.storageService.removeGroup();
    this.close();
  }

  close() {
    this.ref.close();
  }
}
