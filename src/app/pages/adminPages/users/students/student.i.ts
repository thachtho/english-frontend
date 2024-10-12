  export const studentSettings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',

      },
      email: {
        title: 'Email',
        type: 'string',
      },
      nickname: {
        title: 'Nickname',
        type: 'string',
      },
      fullname: {
        title: 'Fullname',
        type: 'string',
      },
      password: {
        title: 'Password',
        type: 'string',
      },
    },
  };