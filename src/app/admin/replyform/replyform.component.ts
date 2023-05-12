import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FeedbackBoxComponent } from './feedback-box/feedback-box.component';
import { ForumService } from 'src/app/services/forum.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-replyform',
  templateUrl: './replyform.component.html',
  styleUrls: ['./replyform.component.css']
})
export class ReplyformComponent {
  forumlist: any;
  query: any;
  id: any;
  data: any;

  constructor(private fs: ForumService) {
    this.fs.getForum().subscribe({
      next: (data: any) => this.forumlist = data,
      error: () => this.forumlist = []
    });
  }

  AddQuestion() {
    if (this.query && this.query.trim().length > 0) { 
      const f: any = {
        id: this.forumlist.length + 1,
        question: this.query,
        responses: []
      };
      this.fs.postquery(f).subscribe(
        {
          next: (f: any) => {
            alert("Review/Query posted");
            location.reload();
          },
          error: (error) => alert("Review/Query could not be posted")
        }
      );
    } else {
      alert("Please enter a Review/Query"); 
    }
  }
}
