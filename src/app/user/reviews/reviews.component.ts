import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ForumService } from 'src/app/services/forum.service';
import { AddemployeeBoxComponent } from 'src/app/admin/addemployee/addemployee-box/addemployee-box.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  forumlist: any;
  query: any;

  constructor(private fs: ForumService) {
    this.fs.getForum().subscribe(
      {
        next: (data: any) => this.forumlist = data,
        error: () => this.forumlist = []
      }
    );
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
