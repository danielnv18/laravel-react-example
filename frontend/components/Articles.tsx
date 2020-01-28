import React, { FunctionComponent, useState } from 'react';
import DataTable from '../components/Tables';
import { Article } from '../interfaces';
import Button from '@material-ui/core/Button';
import Dialog from './Dialog';
import { deleteArticle, updateArticle } from '../hooks';
import { articleHeadCells } from '../misc/tables';
import ArticleForm from './ArticleForm';

interface ArticlesProps {
  articles: Article[];
  setlastRefech: Function;
}

const Articles: FunctionComponent<ArticlesProps> = ({
  articles,
  setlastRefech,
}) => {
  const [modalContent, setModalContent] = useState({
    title: null,
    content: null,
    actions: null,
  });
  const [open, setOpen] = useState(false);

  const handleDeleteActionClick = (article: Article) => {
    setModalContent({
      title: 'Delete article',
      content: `Are you sure you want to delete ${article.name}?`,
      actions: (
        <>
          <Button
            onClick={() => setOpen(false)}
            color="primary"
            autoFocus
            variant="contained"
          >
            No
          </Button>
          <Button
            onClick={async () => {
              const result = await deleteArticle(article.id).catch();
              if (result.success) {
                setlastRefech(Date().toString());
                setOpen(false);
              } else {
                setModalContent({
                  title: 'Somehting went wrong',
                  content: `There was an error trying to delete ${article.name}`,
                  actions: (
                    <Button
                      onClick={() => setOpen(false)}
                      color="primary"
                      autoFocus
                      variant="contained"
                    >
                      Close
                    </Button>
                  ),
                });
              }
            }}
            color="secondary"
            autoFocus
          >
            Yes
          </Button>
        </>
      ),
    });
    setOpen(true);
  };

  const handleUpdateActionClick = (article: Article) => {
    setModalContent({
      title: article.name,
      content: (
        <>
          <ArticleForm
            name={article.name}
            description={article.description}
            price={article.price}
            total_in_shelf={article.total_in_shelf}
            total_in_vault={article.total_in_vault}
            store_id={article.store_id}
            onSubmit={async values => {
              const response = await updateArticle(article.id, values);
              if (response.success) {
                setlastRefech();
                setOpen(false);
              } else {
                setModalContent({
                  title: 'Somehting went wrong',
                  content: `There was an error trying to updating ${article.name}`,
                  actions: (
                    <Button
                      onClick={() => setOpen(false)}
                      color="primary"
                      autoFocus
                      variant="contained"
                    >
                      Close
                    </Button>
                  ),
                });
              }
            }}
          />
        </>
      ),
      actions: (
        <>
          <Button
            onClick={() => setOpen(false)}
            color="primary"
            autoFocus
            variant="contained"
          >
            Close
          </Button>
        </>
      ),
    });
    setOpen(true);
  };

  const getArticleActions = (article: Article) => {
    return (
      <>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => handleUpdateActionClick(article)}
          variant="contained"
          color="primary"
        >
          Edit
        </Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => handleDeleteActionClick(article)}
          variant="contained"
          color="primary"
        >
          Delete
        </Button>
      </>
    );
  };

  return (
    <>
      <DataTable
        headCells={articleHeadCells}
        actions={article => getArticleActions(article)}
        rows={articles}
      />
      <Dialog
        title={modalContent.title}
        content={modalContent.content}
        actions={modalContent.actions}
        isOpen={open}
      />
    </>
  );
};

export default Articles;
