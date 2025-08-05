import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {

      getBookmarks(userId: number) {
        return 'This action returns all bookmarks';
      }
    
      getBookmarkById(userId: number, bookmarkId: number) {
        return `This action returns a bookmark with id`;
      }
    
      createBookmark(userId: number, dto: CreateBookmarkDto) {
        return 'This action creates a bookmark';
      }
    
      editBookmarkById(userId: number, dto: EditBookmarkDto) {}

      deleteBookmarkById(userId: number, bookmarkId: number) {
        return 'This action deletes a bookmark';
      }
}
