package edu.oakland.ideas.v1.service;

import edu.oakland.ideas.v1.model.*;
import java.sql.Timestamp;
import java.util.List;


public interface IIdeaDB {

  public List<Idea> getIdeaList(int ideaNumber, String pidm);

  public void addIdea(Idea idea);

  public void submitVote(Vote vote);

  public List<Idea> getUnapprovedIdeas(int ideaNumber) ;

  public List<Idea> getAdminIdeas(int category, int ideaNumber) ;

  public boolean isAdmin(String pidm);

  public List<Idea> getWaitingIdeas(int ideaNumber); 

  public void editIdea(Idea idea); 

  public List<Idea> getArchiveIdeas(int ideaNumber); 

  public List<Idea> getFlaggedIdeas(int ideaNumber);

  public void flagIdea(Idea idea);

  public void archiveIdea(Idea idea);

  public boolean isListEmpty();
}
